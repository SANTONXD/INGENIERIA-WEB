document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      nombre: document.getElementById('nombre').value.trim(),
      email: document.getElementById('email').value.trim(),
      mensaje: document.getElementById('mensaje').value.trim(),
    };

    if (!data.nombre || !data.email || !data.mensaje) {
      alert('⚠️ Por favor completa todos los campos.');
      return;
    }

    try {
      const response = await fetch('https://backend-ingenieria-web-main.onrender.com/api/mensaje/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include', // 👈 Permite enviar cookies y CSRF
        mode: 'cors',            // 👈 Activa CORS para origen cruzado
      });

      const result = await response.json();

      if (response.ok) {
        alert('✅ Mensaje enviado correctamente.');
        form.reset();
      } else {
        console.error('Error del servidor:', result);
        alert('❌ Error al enviar: ' + (result.message || 'Error desconocido.'));
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('🚫 No se pudo conectar con el servidor. Verifica que el backend esté corriendo.');
    }
  });
});
