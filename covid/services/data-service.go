package services

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jorgelucas-rm/observatorio-fortaleca/constants"
	"github.com/jorgelucas-rm/observatorio-fortaleca/models"
)

type DataService struct {}

func NewDataService() *DataService {
	return &DataService{}
}

func (d *DataService) DoSomeThing(c *gin.Context) {
	c.JSON(200, gin.H{
		"message" : "Hello world",
	})
}

func (d *DataService) LastWeek(c *gin.Context) {
    date := time.Now().AddDate(-3, 0, 0) 
    var cearaReturnData []models.StateReturnData
    for i := 0; i < 7; i++ {
        formattedDate := date.Format("20060102")

        url := constants.URL + formattedDate
        resp, err := http.Get(url)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao fazer requisição para %s: %v", url, err),
            })
            return
        }
        defer resp.Body.Close()

        body, err := io.ReadAll(resp.Body)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao ler o corpo da resposta da URL %s: %v", url, err),
            })
            return
        }

        var apiResponse models.ApiResponse
        err = json.Unmarshal(body, &apiResponse)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao parsear JSON da URL %s: %v", url, err),
            })
            return
        }

        for _, state := range apiResponse.Data {
            if state.Uf == "CE" {
                cearaReturnData = append(cearaReturnData, models.StateReturnData{
                    Cases:    state.Cases,
                    Deaths:   state.Deaths,
                    Suspects: state.Suspects,
                    Refuses:  state.Refuses,
                })
                break
            }
        }

        date = date.AddDate(0, 0, -1)
    }

    c.JSON(http.StatusOK, cearaReturnData)
}

func (d *DataService) LastMonth(c *gin.Context) {
    date := time.Now().AddDate(-3, 0, 0) 
    var cearaReturnData []models.StateReturnData
    for i := 0; i < 30; i++ {
        formattedDate := date.Format("20060102")

        url := constants.URL + formattedDate
        resp, err := http.Get(url)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao fazer requisição para %s: %v", url, err),
            })
            return
        }
        defer resp.Body.Close()

        body, err := io.ReadAll(resp.Body)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao ler o corpo da resposta da URL %s: %v", url, err),
            })
            return
        }

        var apiResponse models.ApiResponse
        err = json.Unmarshal(body, &apiResponse)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao parsear JSON da URL %s: %v", url, err),
            })
            return
        }

        for _, state := range apiResponse.Data {
            if state.Uf == "CE" {
                cearaReturnData = append(cearaReturnData, models.StateReturnData{
                    Cases:    state.Cases,
                    Deaths:   state.Deaths,
                    Suspects: state.Suspects,
                    Refuses:  state.Refuses,
                })
                break
            }
        }

        date = date.AddDate(0, 0, -1)
    }

    c.JSON(http.StatusOK, cearaReturnData)
}

func (d *DataService) LastYear(c *gin.Context) {
	date := time.Now().AddDate(-3, 0, 0) 
    var cearaReturnData []models.StateReturnData
    for i := 0; i < 12; i++ {
        formattedDate := date.Format("20060102")

        url := constants.URL + formattedDate
        resp, err := http.Get(url)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao fazer requisição para %s: %v", url, err),
            })
            return
        }
        defer resp.Body.Close()

        body, err := io.ReadAll(resp.Body)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao ler o corpo da resposta da URL %s: %v", url, err),
            })
            return
        }

        var apiResponse models.ApiResponse
        err = json.Unmarshal(body, &apiResponse)
        if err != nil {
            c.JSON(http.StatusInternalServerError, gin.H{
                "error": fmt.Sprintf("Erro ao parsear JSON da URL %s: %v", url, err),
            })
            return
        }

        for _, state := range apiResponse.Data {
            if state.Uf == "CE" {
                cearaReturnData = append(cearaReturnData, models.StateReturnData{
                    Cases:    state.Cases,
                    Deaths:   state.Deaths,
                    Suspects: state.Suspects,
                    Refuses:  state.Refuses,
                })
                break
            }
        }

        date = date.AddDate(0, -1, 0)
    }

    c.JSON(http.StatusOK, cearaReturnData)
}