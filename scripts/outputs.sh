#!/bin/sh
set -e
cd "$(dirname "$0")/.."
export DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
for f in $(find "${1:-app}" -name '*.cs' | sort); do
  grep -q '#:sdk Microsoft.NET.Sdk.Web' "$f" && continue
  echo "$f"
  dotnet run -p:TreatWarningsAsErrors=true "$f" > "${f%.cs}.txt"
done
