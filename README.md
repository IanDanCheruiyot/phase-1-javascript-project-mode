# Phase-1 Project

This is my Phase 1 project.

# By

This project is the sole brainchild and property of Ian Dan Cheruiyot.

# King Arthur Pet Adoption

Welcome to the King Arthur Pet Adoption project! This is a simple web application designed to showcase pets available for adoption and the veterinarians associated with our center. Users can view information about pets and vets, and submit an adoption form.

## Project Structure

- **king.html**: The main HTML file that structures the website.
- **king.css**: The stylesheet for styling the website.
- **king.js**: The JavaScript file that handles dynamic content and interactions.
- **db.json**: The JSON file containing data about pets and veterinarians.

## Features

- **Home Page**: Displays navigation to different sections of the site.
- **About Us**: Provides information about the pet adoption center.
- **Pets**: Lists pets available for adoption with their details and images. Each pet has a remove button "Adopted" for admin purposes.
- **Vets**: Lists veterinarians with their specialties and images.
- **Contact Us**: Provides contact information for various inquiries.
- **Adopt a Pet**: A form for users to express interest in adopting a pet.

## Setup/Installation Requirements

* One would need either linux or wsl for window users
* A copy of visual basic code installed
* A github account

1. Open your terminal and go to the directory you wish to work from.
2. Go to the following url using ur github account https://github.com/IanDanCheruiyot/phase-1-javascript-project-mode.git
3. Go to the code tab and clone the ssh key
4. Go back to the termina and type git clone <-followed by the ssh key you copied /cloned ->
5. Enter your new cloned repository and type in code .
6. On the visual studio code that has now opened, go to the the run tab and hit start debugging.

## Technologies Used

This program is built purely with javascript using the visual code environment.
It also has db.json file which contains the data we are going to use.

## Usage

1. **View Pets**: Check the "Pets" section to see all available pets for adoption, along with their images.
2. **View Vets**: In the "Vets" section, view the list of veterinarians and their specialties.
3. **Adopt a Pet**: Fill out the adoption form to express interest in a pet.
4. **Remove Pets**: Admin users can remove adopted pets from the list by clicking the "Adopted" button next to each pet.

## Data Structure

The data is stored in `db.json` with the following structure:

```json
{
    "Pets": [
        {
            "id": 1,
            "name": "Rico",
            "species": "Dog",
            "age": 6,
            "description": "Rico is a friendly 6-year-old dog who loves walks and cuddles. He's a playful companion with a gentle nature.",
            "imageUrl": "https://i.pinimg.com/564x/24/bc/1b/24bc1b4f7fe377849b845c3182f47b4c.jpg"
        },
        {
            "id": 2,
            "name": "Alfred",
            "species": "Cat",
            "age": 1,
            "description": "Alfred is a curious 1-year-old kitten with a playful personality. He enjoys exploring and is affectionate and charming.",
            "imageUrl": "https://i.pinimg.com/564x/76/99/57/769957b346d27e8c0f053749edc2c26b.jpg"
        },
        {
            "id": 3,
            "name": "Captain",
            "species": "Bird",
            "age": 2,
            "description": "Captain is a vibrant 2-year-old bird with colorful feathers. He loves to sing and interact, bringing cheer to your home.",
            "imageUrl": "https://i.pinimg.com/736x/89/ab/07/89ab0719a352b177b2f1d23792173ca6.jpg"
        }
    ],
    "Vets": [
        {
            "id": 4,
            "name": "Dr.Bule",
            "speciality": "Surgeon",
            "imageUrl": "https://i.pinimg.com/736x/de/7e/51/de7e51911beef7c297e1c1372ec7fab1.jpg"
        },
        {
            "id": 5,
            "name": "Dr.Spot",
            "speciality": "Feline Specialist",
            "imageUrl": "https://i.pinimg.com/736x/41/d7/78/41d778d48fc6e2d53011dbfaef67f971.jpg"
        },
        {
            "id": 6,
            "name": "Dr.Sal",
            "speciality": "Canine Specialist",
            "imageUrl": "https://i.pinimg.com/564x/7f/b8/7b/7fb87b373cb67abc23018136d0c424b4.jpg"
        },
        {
            "id": 7,
            "name":"Dr.Bella",
            "speciality": "Avian Veterinarian",
            "imageUrl": "https://i.pinimg.com/564x/05/71/7b/05717b5f6fd35234e43ee7cb3c7f8c95.jpg"
        }
    ]
}