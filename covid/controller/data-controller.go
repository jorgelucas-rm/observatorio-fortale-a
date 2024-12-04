package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/jorgelucas-rm/observatorio-fortaleca/services"
)


func DataController(r *gin.RouterGroup, handler *services.Handler) {
	r.GET("/", handler.DataService.DoSomeThing)
	r.GET("/last-week", handler.DataService.LastWeek)
	r.GET("/last-month", handler.DataService.LastMonth)
	r.GET("/last-year", handler.DataService.LastYear)
}