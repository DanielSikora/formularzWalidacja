/**
 * Stwórz formularz rejestracyjny w React, który zawiera następujące pola:
 *Imię (min. 3 znaki)
 *Adres e-mail (sprawdź poprawność formatu)
 *Hasło (min. 8 znaków, musi zawierać co najmniej jedną cyfrę i jedną literę)
 *Wybór miasta (wybierz z listy)

 * Kroki do realizacji:
 *Stwórz komponent formularza z użyciem useState do przechowywania wartości pól.
 *Dodaj funkcję walidującą wartości pól.
 *Użyj warunkowego renderowania, aby pokazać komunikaty błędów dla każdego z pól.
 *Dodaj przycisk „Wyślij” i upewnij się, że formularz może zostać przesłany tylko wtedy, gdy wszystkie pola są prawidłowo wypełnione.
 */
import React, { useState } from 'react';

const RegisterForm = () => {
  // Definiujemy stan dla danych formularza, początkowo są puste
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
  });

  // Definiujemy stan dla błędów walidacji, początkowo brak błędów
  const [errors, setErrors] = useState({});

  // Funkcja walidująca dane w formularzu
  const validate = () => {
    let newErrors = {}; // Tworzymy obiekt na potencjalne błędy

    // Sprawdź, czy imię ma co najmniej 3 znaki
    if (formData.name.length < 3) {
      newErrors.name = 'Imię musi mieć co najmniej 3 znaki.'; // Ustaw błąd dla pola imienia
    }

    // Walidacja adresu e-mail na podstawie wzorca regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Wzorzec sprawdzający poprawny adres e-mail
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Wprowadź poprawny adres e-mail.'; // Ustaw błąd dla pola e-mail
    }

    // Walidacja hasła (min. 8 znaków, co najmniej jedna litera i jedna cyfra)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Wzorzec dla hasła
    if (!passwordPattern.test(formData.password)) {
      newErrors.password = 'Hasło musi mieć co najmniej 8 znaków, zawierać co najmniej jedną literę i jedną cyfrę.'; // Ustaw błąd dla pola hasła
    }

    // Sprawdzenie, czy miasto zostało wybrane
    if (formData.city === '') {
      newErrors.city = 'Wybierz miasto.'; // Ustaw błąd dla pola miasta
    }

    // Zapisz nowy stan błędów i zwróć informację, czy formularz jest poprawny
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Jeśli brak błędów, formularz jest poprawny
  };

  // Funkcja wywoływana po kliknięciu przycisku "Wyślij"
  const handleSubmit = (event) => {
    event.preventDefault(); // Zapobiega domyślnemu odświeżeniu strony po wysłaniu formularza
    if (validate()) {
      alert('Formularz przesłany!'); // Wyświetl alert, jeśli dane są poprawne
    }
  };

  // Wyświetlenie formularza z odpowiednimi polami i walidacją
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Imię:</label>
        <input
          type="text"
          value={formData.name} // Powiązanie wartości z danymi w stanie
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Aktualizacja stanu po zmianie w polu
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>} {/* Wyświetl błąd, jeśli istnieje */}
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          value={formData.email} // Powiązanie wartości z danymi w stanie
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Aktualizacja stanu po zmianie w polu
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} {/* Wyświetl błąd, jeśli istnieje */}
      </div>
      <div>
        <label>Hasło:</label>
        <input
          type="password"
          value={formData.password} // Powiązanie wartości z danymi w stanie
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} // Aktualizacja stanu po zmianie w polu
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} {/* Wyświetl błąd, jeśli istnieje */}
      </div>
      <div>
        <label>Miasto:</label>
        <select value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}> {/* Aktualizacja stanu po wyborze z listy */}
          <option value="">Wybierz miasto</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
          <option value="Gdańsk">Gdańsk</option>
        </select>
        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>} {/* Wyświetl błąd, jeśli istnieje */}
      </div>
      <button type="submit">Wyślij</button> {/* Przycisk do wysłania formularza */}
    </form>
  );
};

// Eksportowanie komponentu formularza
export default RegisterForm;

/**
 * Jak działa walidacja:
 *Wartości formularza są przechowywane w stanie za pomocą useState.
 *Funkcja validate sprawdza wartości każdego pola formularza, tworzy obiekt błędów, a następnie 
 *przypisuje go do stanu errors.
 *Każde pole formularza wyświetla odpowiedni komunikat o błędzie, jeśli dane są niepoprawne.
 *Przy próbie wysłania formularza (przycisk „Wyślij”) wywoływana jest funkcja handleSubmit, 
 *która najpierw sprawdza, czy wszystkie pola przeszły walidację. Jeśli tak, formularz zostaje
 *„przesłany” (w tym wypadku pokazuje alert).
 */