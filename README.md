# Sistema de Registro - Celeste AI

## Estructura del Repositorio

Este repositorio contiene el sistema de activación para Celeste AI.

### Archivos Principales

1. **keys.json** - Base de datos de todas las keys disponibles
   - Cada key es única y de un solo uso
   - Campos: usada, producto, fecha_venta, email_cliente, notas

2. **users.json** - Base de datos de usuarios registrados
   - Se llena automáticamente cuando los usuarios se registran
   - Campos: password_hash, key_usada, estado, proximo_pago, hwid

### Flujo de Trabajo

1. **Generar keys**:
   ```bash
   python generate_keys.py --cantidad 10 --producto Professional
