## API Document for Traffic Sign Recognition - Version 0

- [Upload Image](#upload-image)
- [List Accepted Images](#list-accepted-images)
- [Get History of Model Updates](#get-history-of-model-updates)

### Upload Image

##### Request
```
POST /v0/upload?limit=3
```

`Header`

| Header | Description |
|------- | ----------- |
| enctype | multipart/form-data |
| dataType | text |

`Body`

```
{
  "data": formData
}
```

##### Response
`Status: 200 Ok`

`Header`

| Header | Description |
|--------|-------------|
| dataType | application/json |

`Body`

```json
{
    "error": "error message",
    "accepted": true,
    "class_labels": [
        {
            "label": "Stop sign"
        }
    ],
    "limit": 3,
    "results": [
        {
            "class_id": 1,
            "accuracy": 90.1
        }
    ],
    "image_url": "http://localhost/v0/images/:image_resource_id.jpg"
}
```

**Parameters**

| Name | Type | Description |
|---------------|------|-------------|
| `accepted` | boolean | Whether this image is used to update model |
| `limit` | integer | Maximum number of results returned |
| `class_labels[]` <br> (`optional`) | array | Label for each class id. If this field is missing, default labels will be used. Length = 11|
| `class_labels[].label` <br> (`optional`) | string | Name of each class |
| `limit` <br> (`optional`) | integer | Maximum number of results. Default value is `3`. |
| `results[]` | array | Length = `limit` |
| `results[].class_id` | integer | 1 ~ 11 indicating a class id |
| `results[].accuracy` | float | Accuracy calculated by the model |
| `results[].image_url` | url | URI for the uploaded image |

---

### List Accepted Images

##### Request
```
GET /v0/images?limit=10?start=0?sort=uploaded_time?accepted=true
```

`Header`

| Header | Description |
|------- | ----------- |
| N/A | N/A |

`Body`

```

```

##### Response
`Status: 200 Ok`

`Header`

| Header | Description |
|--------|-------------|
| dataType | application/json |

`Body`

```json
{
    "_links": {
        "next": "http://localhost/v0/images?limit=10?start=10?sort=uploaded_time?accepted=true",
        "self": "http://localhost/v0/images?limit=10?start=0?sort=uploaded_time?accepted=true"
    },
    "error": "error message",
    "class_labels": [
        {
            "label": "Stop sign"
        }
    ],
    "results": [
        {
            "class_id": 1,
            "accuracy": 90.1,
            "accepted": true,
            "image_url": "http://localhost/v0/images/:image_resource_id.jpg",
            "uploaded_at": "2018-04-30T13:59:59Z"
        }
    ]
}
```
**Parameters**

| Name | Type | Description |
|---------------|------|-------------|
| `error` | string | Error message |
| `_links.next` <br>(`optional`) | string | Url of the next page. `null` if it is the last page. |
| `_links.self` <br>(`optional`) | string | Url of current page. |
| `sort` <br>(`optional`) | string | `class_id` or `accuracy` or `upload_time` + `_asc`. Default sort by `upload_time` in descending order |
| `accepted` | boolean | Filter. Only return images that are accepted to update model when set to `true`. |
| `class_labels[]` <br>(`optional`) | array | Label for each class id. If this field is missing, default labels will be used. Length = 11|
| `class_labels[].label` <br>(`optional`) | string | Name of each class |
| `limit` | integer | Default is `10` |
| `results[]` | array | Length <= `limit` |
| `results[].class_id` | integer | 1 ~ 11 indicating a class id |
| `results[].accuracy` | float | Accuracy calculated by the model |
| `results[].accepted` | boolean | `true` means this image is used to update the model. |
| `results[].image_url` | string | URI for the uploaded image |
| `results[].uploaded_at` | string | When the image is uploaded. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`  |

---

### Get History of Model Updates

##### Request
```
GET /v0/model
```

`Header`

| Header | Description |
|------- | ----------- |
| N/A | N/A |

`Body`

```
```

##### Response
`Status: 200 Ok`

`Header`

| Header | Description |
|--------|-------------|
| dataType | application/json |

`Body`

```json
{
    "error": "error message",
    "history": [
        {
            "model_accuracy": 90.5,
            "images": [
                {
                    "class_id": 1,
                    "accuracy": 90.7,
                    "accepted": true,
                    "image_url": "http://localhost/v0/images/:image_resource_id.jpg",
                    "uploaded_at": "2018-04-30T13:59:59Z"
                }
            ]
        }
    ]
}
```

**Parameters**

| Name | Type | Description |
|---------------|------|-------------|
| `accepted` | boolean | Whether this image is used to update model |
| `history[]` | array | History of updates of the model. |
| `history[].model_accuracy` | float | Accuracy of the model, after applying `images` listed. |
| `history.images[]` <br>(`optional`) | array | List of images used to update the model in a batch. |
| `history[].images[].class_id` <br>(`optional`) | integer | 1 ~ 11 indicating a class id |
| `history[].images[].accuracy` |<br>(`optional`)  float | Accuracy calculated by the model |
| `history[].images[].accepted` <br>(`optional`) | boolean | `true` means this image is used to update the model. |
| `history[].images[].image_url` <br>(`optional`) | string | URI for the uploaded image |
| `history[].images[].uploaded_at` <br>(`optional`) | string | When the image is uploaded. This is a timestamp in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`  |

---
