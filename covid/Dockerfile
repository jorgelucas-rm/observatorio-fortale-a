FROM golang:1.23 AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o main .

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y ca-certificates && \
    apt-get clean && \
    update-ca-certificates

WORKDIR /app
COPY --from=builder /app/main .

EXPOSE 8080

CMD ["./main"]
