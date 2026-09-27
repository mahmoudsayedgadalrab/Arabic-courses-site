#!/usr/bin/env bash
# Installs the system tools HyperFrames needs to render and transcribe video:
# FFmpeg, Chrome Headless Shell, and whisper.cpp (for captions/transcription).
# Safe to re-run: each step is skipped when already installed.
set -euo pipefail

SUDO=""
if [ "$(id -u)" -ne 0 ] && command -v sudo >/dev/null; then SUDO="sudo"; fi

need_apt=()
command -v ffmpeg >/dev/null || need_apt+=(ffmpeg)
command -v cmake  >/dev/null || need_apt+=(cmake)
command -v g++    >/dev/null || need_apt+=(build-essential)
command -v git    >/dev/null || need_apt+=(git)
if [ ${#need_apt[@]} -gt 0 ]; then
  $SUDO apt-get update -qq
  $SUDO apt-get install -y -qq "${need_apt[@]}"
fi

# Chrome Headless Shell used by the renderer
npx -y hyperframes browser ensure

# whisper.cpp, built where the HyperFrames CLI looks for it
WHISPER_DIR="$HOME/.cache/hyperframes/whisper/whisper.cpp"
if [ ! -x "$WHISPER_DIR/build/bin/whisper-cli" ]; then
  rm -rf "$WHISPER_DIR"
  mkdir -p "$(dirname "$WHISPER_DIR")"
  git clone --depth 1 https://github.com/ggml-org/whisper.cpp.git "$WHISPER_DIR"
  cmake -S "$WHISPER_DIR" -B "$WHISPER_DIR/build" -DCMAKE_BUILD_TYPE=Release
  cmake --build "$WHISPER_DIR/build" --config Release -j
fi

npx -y hyperframes doctor
