import os
import subprocess
import json
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import pickle

SCOPES = ['https://www.googleapis.com/auth/youtube.upload']

def analyze_video(file_path):
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Video file not found: {file_path}")
    
    cmd = [
        'ffprobe', '-v', 'quiet', '-print_format', 'json',
        '-show_format', '-show_streams', file_path
    ]
    result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    data = json.loads(result.stdout)
    
    video_stream = next(s for s in data['streams'] if s['codec_type'] == 'video')
    duration = float(data['format']['duration'])
    width = int(video_stream['width'])
    height = int(video_stream['height'])
    file_size_mb = os.path.getsize(file_path) / (1024 * 1024)
    
    analysis_report = {
        "file_name": os.path.basename(file_path),
        "size_mb": round(file_size_mb, 2),
        "duration_seconds": round(duration, 2),
        "resolution": f"{width}x{height}"
    }
    
    print("\n[BYTE ANALYZER] --- Video Metadata Report ---")
    for key, value in analysis_report.items():
        print(f"  {key}: {value}")
    print("--------------------------------------------\n")
    return analysis_report

def get_authenticated_service():
    creds = None
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('client_secret.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
            
    return build('youtube', 'v3', credentials=creds)

def upload_video(file_path, title, description, tags, category_id="28", privacy_status="public"):
    youtube = get_authenticated_service()
    
    body = {
        'snippet': {
            'title': title,
            'description': description,
            'tags': tags,
            'categoryId': category_id
        },
        'status': {
            'privacyStatus': privacy_status,
            'selfDeclaredMadeForKids': False
        }
    }
    
    media = MediaFileUpload(file_path, chunksize=-1, resumable=True)
    
    print(f"[BYTE PUBLISHER] Starting upload for: {title}...")
    request = youtube.videos().insert(
        part='snippet,status',
        body=body,
        media_body=media
    )
    
    response = None
    while response is None:
        status, response = request.next_chunk()
        if status:
            print(f"[Uploading...] {int(status.progress() * 100)}% complete.")
            
    print(f"\n[SUCCESS] Video uploaded successfully!")
    print(f"Watch URL: https://youtu.be/{response.get('id')}")

if __name__ == '__main__':
    video_file = "sample_video.mp4"
    try:
        metadata = analyze_video(video_file)
        upload_video(
            file_path=video_file,
            title="Automated Upload via BYTE Engine",
            description="Analyzed and published automatically using BYTE Automation Hub.",
            tags=["automation", "tech", "byte", "python"],
            category_id="28",
            privacy_status="public"
        )
    except Exception as e:
        print(f"[ERROR] Automation workflow failed: {e}")
