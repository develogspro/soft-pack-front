#!/bin/zsh

set -e

cd "$(dirname "$0")"

site_port="${1:-4173}"
site_url="http://127.0.0.1:${site_port}/"

python3 -m http.server "$site_port" --bind 127.0.0.1 &
server_pid=$!

cleanup() {
    kill "$server_pid" 2>/dev/null || true
}

trap cleanup EXIT INT TERM

sleep 0.5
open "$site_url"

echo "SOFT PACK website is running at $site_url"
echo "Keep this window open. Press Ctrl+C to stop the server."

wait "$server_pid"
