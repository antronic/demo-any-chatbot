# FROM --platform=linux/amd64 python:3.12-alpine
FROM python:3.12-alpine

# Install dependencies
RUN apk add --no-cache \
    bash \
    curl \
    git \
    jq \
    openssh-client \
    rsync \
    zip \
    make

# Set working directory
WORKDIR /app

# Copy project files
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Run the application
CMD ["make", "prod"]
# CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]