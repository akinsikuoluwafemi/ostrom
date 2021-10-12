<h1 align="center">Welcome to Clean Code👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/akinsikuoluwafemi/ostrom" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/david\_akinsiku" target="_blank">
    <img alt="Twitter: david_akinsiku" src="https://img.shields.io/twitter/follow/david_akinsiku.svg?style=social" />
  </a>
</p>



### 🏠 [Homepage](https://github.com/akinsikuoluwafemi/ostrom)

### ✨ [Demo](https://github.com/akinsikuoluwafemi/ostrom)

## Author

👤 **Akinsiku Oluwafemi David**

* Website: https://femiakin.com/
* Twitter: [@david\_akinsiku](https://twitter.com/david\_akinsiku)
* Github: [@akinsikuoluwafemi](https://github.com/akinsikuoluwafemi)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/femiakinsiku\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/femiakinsiku\/)

### Project Description

> This is an application for the school CleanCode that allows them manage their students better, it allows them to view all the students in one application and make changes like deleting, editing and also creating more students as they enrol.

### Getting Started
```
git clone git@github.com:akinsikuoluwafemi/ostrom.git
```
```
  cd students-ui && npm install && npm start
```

***in another terminal run***

```
  cd students-api && npm install && npm run dev
```

# Students-API documentation

After starting the server, head over to the [swagger api docs](http://localhost:7000/api-docs/
)

**URL**

/items

**Method:**
<_The request type_>
`GET` | `POST` | `DELTE` | `PUT`



**URL Params**
**Required:**

`id=[interger]`

**Success Response:**
**Code:** 200 <br/>
**Content:** 
          `{
            "id": 2,
            "firstName": "Tyler",
            "lastName": "Kyle",
            "courseName": "Intro to Kotlin",
            "numberOfHrs": "24",
            "price": "259",
            "studentDob": "1994/09/05"}`

**Error Response:**
**Code:** 404 NOT FOUND

**Sample Call:**

**Get Request**
```
  const {data} = await axios.get(`${root_url}/items`);

```

**Post Request**

`
  const student = {
      "id": 2,
      "firstName": "Tyler",
      "lastName": "Kyle",
      "courseName": "Intro to Kotlin",
      "numberOfHrs": "24",
      "price": "259",
      "studentDob": "1994/09/05"

  }
`

```
 const {data} = await axios.post(`${root_url}/items`, student)

```


**Update Request**

```
 const {data} = await axios.put(`${root_url}/items/:id`, student)

```

**Delete Request**

```
   axios.delete(`${root_url}/items/:id`)

```


# React-typescript frontend
This is the frontend of the application. I made use of React typescript for this and installed a few dependencies like


- Axios: For making api calls
- Redux: For state management 
- React-redux: For bootstrapping react and redux together. 
- Node sass: For styling.

- Moment: For data conversion efficiently
- Redux-thunk: For adding middleware func to the frontend app etc


### Testing the app
Run `npm test`

### Building the app

Run `npm run build`
