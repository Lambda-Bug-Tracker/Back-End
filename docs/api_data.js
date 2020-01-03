define({ "api": [
  {
    "type": "delete",
    "url": "/projects/:user_id/:project_id",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n     \"success\": \"deleted\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/routes/projects/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "name": "DeleteProjectsUser_idProject_id"
  },
  {
    "type": "get",
    "url": "/projects/:user_id",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 OK    \n{\n     \"projects\": [\n       {\n         \"project_name\": \"A Project\",\n         \"description\": \"dis is a project description\"\n       }\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/routes/projects/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "name": "GetProjectsUser_id"
  },
  {
    "type": "post",
    "url": "/projects/:user_id",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "name",
            "description": "<p>Name of project Must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of project</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 201 Created\n{\n     \"newProject\": [\n       {\n         \"project_name\": \"project 23\",\n         \"description\": \" dis is 23\"\n       },\n       {\n         \"project_name\": \"project 24\",\n         \"description\": \" dis is 24\"\n       }\n     ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/routes/projects/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "name": "PostProjectsUser_id"
  },
  {
    "type": "put",
    "url": "/projects/:user_id",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "...128",
            "optional": false,
            "field": "name",
            "description": "<p>Name of project Must be unique</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/routes/projects/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "name": "PutProjectsUser_id"
  }
] });
