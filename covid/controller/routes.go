package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/jorgelucas-rm/observatorio-fortaleca/constants"
	"github.com/jorgelucas-rm/observatorio-fortaleca/services"
)

func RegisterRoutes(r *gin.Engine, handler *services.Handler){
	basePath := r.Group(constants.BASE_PATH)
	DataController(basePath ,handler)
}