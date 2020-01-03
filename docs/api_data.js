define({ "api": [
  {
    "type": "get",
    "url": "/bugs/:project_id",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"bugs\": [\n    {\n      \"bug_name\": \"bug2\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/bugs/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\bugs\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\bugs\\route.js",
    "name": "GetBugsProject_id"
  },
  {
    "type": "post",
    "url": "/bugs/:project_id",
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
            "description": "<p>Name of bug may not be unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of bug.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "priority_tag",
            "description": "<p>Indicates how high on the priority list this bug is.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "progress_tag",
            "description": "<p>Indicates how far along in the process the bug is. Is defaulted to 1 and is not required in body of request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "hash_tag",
            "description": "<p>Describes what coding area the bug falls under (front end, back end, UI).</p>"
          },
          {
            "group": "Parameter",
            "type": "Timestamp",
            "optional": false,
            "field": "created_at",
            "description": "<p>Let's us know when the bug was created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 201 Created\n{\n  \"name\": \"A new bug\",\n  \"description\": \"It keeps breaking my code\",\n  \"priority_tag\": 1,\n  \"hash_tag\": 1,\n  \"created_at\": \"2020-01-3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/bugs/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\bugs\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\bugs\\route.js",
    "name": "PostBugsProject_id"
  },
  {
    "type": "put",
    "url": "/bugs/:bug_id",
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
            "description": "<p>Name of bug may not be unique.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of bug.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "priority_tag",
            "description": "<p>Indicates how high on the priority list this bug is.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "progress_tag",
            "description": "<p>Indicates how far along in the process the bug is.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "hash_tag",
            "description": "<p>Describes what coding area the bug falls under (front end, back end, UI).</p>"
          },
          {
            "group": "Parameter",
            "type": "Timestamp",
            "optional": false,
            "field": "created_at",
            "description": "<p>Let's us know when the bug was created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 Created\n{\n  \"name\": \"A new bug\",\n  \"description\": \"It keeps breaking my code\",\n  \"priority_tag\": 1,\n  \"hash_tag\": 1,\n  \"created_at\": \"2020-01-3\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/bugs/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\bugs\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\bugs\\route.js",
    "name": "PutBugsBug_id"
  },
  {
    "type": "get",
    "url": "/notes/:bug_id",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"notes\": [\n    {\n      \"additional_note\": \"New Note\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/notes_bugs/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\notes_bugs\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\notes_bugs\\route.js",
    "name": "GetNotesBug_id"
  },
  {
    "type": "post",
    "url": "/notes/:bug_id",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 201 Created\n{\n  \"notes\": [\n    {\n      \"additional_note\": \"New Note\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/notes_bugs/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\notes_bugs\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\notes_bugs\\route.js",
    "name": "PostNotesBug_id"
  },
  {
    "type": "delete",
    "url": "/projects/:user_id/:project_id",
    "title": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/projects/route.js",
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
          "content": "HTTP/1.1 200 OK\n{\n  \"projects\": [\n    {\n      \"user_project_id\": 2,\n      \"project_id\": 2,\n      \"project_name\": \"project2\",\n      \"description\": \"this is project dos\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/projects/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "name": "GetProjectsUser_id"
  },
  {
    "type": "post",
    "url": "/add-project/projects/:user_id",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User you are trying to add to project</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "admin",
            "description": "<p>Either a 0 for false or 1 for true</p>"
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
    "filename": "api/routes/projects/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "name": "PostAddProjectProjectsUser_id"
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
          "content": "HTTP/1.1 201 Created\n{\n  \"projects\": [\n    {\n      \"user_project_id\": 2,\n      \"project_id\": 2,\n      \"project_name\": \"project2\",\n      \"description\": \"this is project dos\"\n    },\n    {\n      \"user_project_id\": 4,\n      \"project_id\": 4,\n      \"project_name\": \"project 30\",\n      \"description\": \" dis is 30\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/projects/route.js",
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
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/projects/route.js",
    "group": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "groupTitle": "C:\\Users\\Chris\\Documents\\git\\hackathon\\Back-End\\api\\routes\\projects\\route.js",
    "name": "PutProjectsUser_id"
  }
] });
