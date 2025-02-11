# Personal Portfolio & Blog Website

This is a personal portfolio and blog website built with **Next.js**. It showcases a portfolio introduction, featured projects, a blog, and a contact form. The website also has a user dashboard where authenticated users can manage blog posts, projects, and view messages submitted through the contact form.

## Features

- Message sending functionality.
- Dynamic data and CRUD features
- Animations
- Customizable and responsive

## Pages

- **Home Page** (`/`):
  - Displays portfolio introduction (name, bio, and profile picture).
  - Showcases skills using icons or skill bars.
  - Highlights featured projects (static or fetched from an API).
  - Includes a resume download button.
- **Projects Page** (`/projects`):

  - Lists projects with images, descriptions, and links.

- **Blog Page** (`/blog`):
  - Displays a list of blog posts
- **Contact Page** (`/contact`):
  - A simple contact form (name, email, message).

### Admin or Owner

`After login`

- **Blog Management**

  - CRUD operations for blog posts (create, read, edit, delete).
  - Form to add/update title, content, image, and category for blogs.

- **Project Management**

  - CRUD operations for managing projects.
  - Upload project image, title, live link, descriptions, etc.

- **Message Management**
  - View messages submitted via the contact form.

## Technology uses

- **Next.JS**
- **TypeScrypt**
- **Shad cn**
- **Next Auth**
- **Framer Motion**

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/md-maruf-billa/Portfolio-with-next_15
```

2. Install all dependencis

```bash
npm install
```

3. Set up env

```js
ENV_TYPE = development
PORT = 5000
DB_URI = your db url
JWT_SECRET = abumahid
CLOUD_NAME= your cloudinary name
CLOUD_API_KEY=cloud api
CLOUD_SECRET= cloud secret
```

4. Start project on development

```bash
npm run dev
```

`If you have any question or feedback feel free to ask me on - dev.aubmahid@gmail.com`
