# 🔑 Credenciales de Prueba - Bridge2Work

## 📋 Usuarios de Prueba Disponibles

### 1. **Administrador** 👨‍💼
- **Email**: `admin@bridge2work.com`
- **Contraseña**: `admin123`
- **Rol**: ADMIN
- **Acceso a**:
  - Panel de administración
  - Gestión de usuarios
  - Moderación de contenido
  - Analytics de administrador
  - Analytics global

---

### 2. **Empresa** 🏢
- **Email**: `empresa@techcorp.com`
- **Contraseña**: `empresa123`
- **Rol**: EMPRESA
- **Nombre**: TechCorp HR
- **Acceso a**:
  - Panel de empresa
  - Gestión de perfiles de trabajo
  - Matching con candidatos
  - Analytics de empresa

---

### 3. **Universidad** 🎓
- **Email**: `universidad@demo.com`
- **Contraseña**: `uni123`
- **Rol**: UNIVERSIDAD
- **Nombre**: Universidad Demo
- **Acceso a**:
  - Panel de universidad
  - Comparativa de tendencias
  - Reportes académicos
  - Analytics global

---

### 4. **Estudiante** 👨‍🎓
- **Email**: `estudiante@demo.com`
- **Contraseña**: `est123`
- **Rol**: ESTUDIANTE
- **Nombre**: Juan Estudiante
- **Acceso a**:
  - Panel de estudiante
  - Mi perfil
  - Recomendaciones personalizadas
  - Mi roadmap de carrera

---

## 🚀 Cómo Usar las Credenciales

### 1. **Acceder a la Aplicación**
```
URL: http://localhost:3000/login
```

### 2. **Seleccionar un Usuario**
Elige cualquiera de los 4 usuarios según el rol que quieras probar.

### 3. **Completar el Formulario**
```
Email: [uno de los emails de arriba]
Contraseña: [la contraseña correspondiente]
```

### 4. **Click en "Iniciar Sesión"**
Serás redirigido automáticamente al dashboard correspondiente según tu rol.

---

## 📝 Ejemplos de Inicio de Sesión

### **Probar como Admin**
1. Ir a: http://localhost:3000/login
2. Email: `admin@bridge2work.com`
3. Contraseña: `admin123`
4. → Redirige a: `/admin`

### **Probar como Empresa**
1. Ir a: http://localhost:3000/login
2. Email: `empresa@techcorp.com`
3. Contraseña: `empresa123`
4. → Redirige a: `/empresa`

### **Probar como Universidad**
1. Ir a: http://localhost:3000/login
2. Email: `universidad@demo.com`
3. Contraseña: `uni123`
4. → Redirige a: `/universidad`

### **Probar como Estudiante**
1. Ir a: http://localhost:3000/login
2. Email: `estudiante@demo.com`
3. Contraseña: `est123`
4. → Redirige a: `/estudiante`

---

## 🔐 Información Técnica

### **Almacenamiento**
- Usuarios almacenados en memoria (in-memory store)
- Para producción: usar Prisma + PostgreSQL

### **Encriptación**
- Contraseñas hasheadas con bcrypt (10 rounds)
- Tokens JWT con expiración de 7 días

### **Token JWT**
- Almacenado en localStorage como `b2w_token`
- Información del usuario en `b2w_user`

---

## ✨ Características por Rol

### **Admin** - Acceso Total
✅ Gestión completa de usuarios  
✅ Moderación de contenido  
✅ Analytics de toda la plataforma  
✅ Estadísticas globales  

### **Empresa** - Reclutamiento
✅ Crear perfiles de trabajo  
✅ Ver candidatos compatibles  
✅ Analytics de contratación  
✅ Matching con estudiantes  

### **Universidad** - Académico
✅ Tendencias del mercado  
✅ Comparativas entre instituciones  
✅ Reportes de empleabilidad  
✅ Analytics global  

### **Estudiante** - Desarrollo
✅ Perfil personalizado  
✅ Recomendaciones de carrera  
✅ Roadmap de aprendizaje  
✅ Búsqueda de oportunidades  

---

## 🆕 Crear Nuevos Usuarios

También puedes registrar nuevos usuarios en: http://localhost:3000/register

**Campos requeridos:**
- Nombre completo
- Email
- Contraseña
- Rol (Admin, Empresa, Universidad, Estudiante)

---

## 🔄 Cambiar Entre Usuarios

1. Click en "Cerrar sesión" en el sidebar
2. Serás redirigido a `/login`
3. Inicia sesión con otro usuario

---

## 📊 Resumen Rápido

| Rol | Email | Contraseña | Dashboard |
|-----|-------|-----------|-----------|
| **Admin** | admin@bridge2work.com | admin123 | /admin |
| **Empresa** | empresa@techcorp.com | empresa123 | /empresa |
| **Universidad** | universidad@demo.com | uni123 | /universidad |
| **Estudiante** | estudiante@demo.com | est123 | /estudiante |

---

**¡Usa estas credenciales para explorar toda la plataforma Bridge2Work! 🚀**
