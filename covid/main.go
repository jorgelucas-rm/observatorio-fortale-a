package main

import (
	"github.com/gin-gonic/gin"
	"github.com/jorgelucas-rm/observatorio-fortaleca/constants"
	"github.com/jorgelucas-rm/observatorio-fortaleca/controller"
	"github.com/jorgelucas-rm/observatorio-fortaleca/services"
)

func main(){
	handler := services.GetHandlerInstance()
	r := gin.Default()
	controller.RegisterRoutes(r, handler)
	r.Run(constants.PORT)

}