package services

type Handler struct {
	exists	bool `default:"false"`
	DataService *DataService
}

var instance Handler

func createHandlerInstance() {
	instance = Handler{
		exists:                true,
		DataService: NewDataService()	}
}

func GetHandlerInstance() *Handler {
	if !instance.exists {
		createHandlerInstance()
	}
	return &instance
}
