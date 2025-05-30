# Marvel Character Manager – Project Plan

## 📌 Overview
A full-stack CRUD app for managing Marvel characters using a Flask backend and a React frontend styled with React Bootstrap.

---

## 🧱 Component Plan

### Pages:
- `/` – HomePage
- `/characters` – CharacterListPage
- `/characters/:id` – CharacterDetailPage
- `/create` – CreateCharacterPage
- `/edit/:id` – EditCharacterPage
- `*` – NotFoundPage

### Components:
- `NavbarComponent`
- `CharacterCard`
- `CharacterForm`
- `Loader`, `ErrorMsg`

---

## 🔄 Routing Logic

- Uses `React Router`
- `useParams()` to get character ID from URL
- `useNavigate()` for redirects after create/update/delete

---

## 🎨 Design & Layout

- **Color Scheme**: Deep red, black, and white
- **Fonts**: Sans-serif (clean and readable)
- **Layout**: Responsive with mobile-first design
- **UI Components**: Bootstrap Cards, Forms, Navbar, Alerts, Modal (optional)

---

## 🔁 CRUD Functionality

| Action   | Path              | Method | Notes                             |
|----------|-------------------|--------|-----------------------------------|
| Read All | `/characters`     | GET    | Cards for each character          |
| Read One| `/characters/:id` | GET    | Full profile                      |
| Create  | `/create`          | POST   | Form with confirmation            |
| Update  | `/edit/:id`        | PUT    | Pre-filled form, confirmation     |
| Delete  | `button` on card   | DELETE | With confirmation dialog/modal    |

---

## ✅ Form Rules
- Required: `name`, `alias`, `alignment`, `powers`, `image_url`
- Uses Bootstrap validation
- Shows error messages on failure
- Shows loading messages on submit