
import http.server
import socketserver
import sys

PORT = 8000

# Variables
DIRECTORY = "."

# Define the request handler
class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

# Allow the server to reuse the port after stopping
class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

# Ready block
with ReusableTCPServer(("", PORT), CustomHandler) as httpd:
    print("================================")
    print("   FULLSTACK BOOTCAMP SERVER")
    print("================================")
    print(f"Python version: {sys.version.split()[0]}")
    print(f"Serving static site at http://localhost:{PORT}")
    print("Press Ctrl+C to stop the server")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
