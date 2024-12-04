package models

type StateData struct {
    Uid       int    `json:"uid"`
    Uf        string `json:"uf"`
    State     string `json:"state"`
    Cases     int    `json:"cases"`
    Deaths    int    `json:"deaths"`
    Suspects  int    `json:"suspects"`
    Refuses   int    `json:"refuses"`
    Broadcast bool   `json:"broadcast"`
    Comments  string `json:"comments"`
    DateTime  string `json:"datetime"`
}

type StateReturnData struct {
    Cases     int    `json:"cases"`
    Deaths    int    `json:"deaths"`
    Suspects  int    `json:"suspects"`
    Refuses   int    `json:"refuses"`
}

type ApiResponse struct {
    Data []StateData `json:"data"`
}
