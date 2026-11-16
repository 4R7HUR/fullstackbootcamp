import http.server
import socketserver

PORT = 8000

# Define the directory to serve files from
DIRECTORY = "."

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

# Set up the server
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving static site at http://localhost:{PORT}")
    httpd.serve_forever()
