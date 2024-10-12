#!/bin/sh

# Debugging: Print the value of SQLITE_DB_PATH
echo "SQLITE_DB_PATH is set to: $SQLITE_DB_PATH"

# Debugging: Check if the source file exists
if [ ! -f "$SQLITE_DB_PATH" ]; then
  echo "Source file does not exist: $SQLITE_DB_PATH"
  exit 1
fi

# Ensure the /app directory exists
mkdir -p /app

# Debugging: Check if the /app directory was created successfully
if [ ! -d "/app" ]; then
  echo "Failed to create /app directory"
  exit 1
fi

# Copy the database file
cp "$SQLITE_DB_PATH" /app/db.sqlite3

# Debugging: Check if the copy was successful
if [ $? -eq 0 ]; then
  echo "Database file copied successfully to /app/db.sqlite3"
else
  echo "Failed to copy database file"
  exit 1
fi