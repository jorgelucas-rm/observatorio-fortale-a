# Etapa 1: Build
FROM golang:1.23 AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o main .

# Etapa 2: Runtime
FROM debian:bookworm-slim

# Adicionando certificados CA ao container
RUN apt-get update && apt-get install -y ca-certificates

WORKDIR /app
COPY --from=builder /app/main .

EXPOSE 8080

CMD ["./main"]
