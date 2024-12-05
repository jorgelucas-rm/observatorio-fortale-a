package infra

import (
	"crypto/tls"
	"net/http"
)

func init() {
	// Ignorar a verificação do certificado SSL
	http.DefaultTransport.(*http.Transport).TLSClientConfig = &tls.Config{InsecureSkipVerify: true}
}
