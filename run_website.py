import http.server
import socketserver
import webbrowser
import os

PORT = 5500
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "website")

os.chdir(DIRECTORY)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}"
    print(f"[OK] Server running at {url}")
    print("   Press Ctrl+C to stop.\n")
    webbrowser.open(url)
    httpd.serve_forever()
