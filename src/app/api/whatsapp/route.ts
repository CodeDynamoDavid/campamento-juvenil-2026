import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, asistira } = body;

    if (!nombre || asistira === undefined) {
      return NextResponse.json({ error: 'Nombre y asistencia son requeridos' }, { status: 400 });
    }

    const MY_PHONE_NUMBER = "51963325164"; 
    
    const respuestaAsistencia = asistira === 'si' ? '✅ Sí, asistiré' : '❌ No podré asistir';

    const textoFormateado = 
      `*Confirmación de Invitado*%0A%0A` +
      `*Nombre:* ${nombre}%0A` +
      `*Respuesta:* ${respuestaAsistencia}`;

    const whatsappUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=${textoFormateado}`;

    return NextResponse.json({ url: whatsappUrl });
    
    } catch (error) {
      console.error("Error en la API de WhatsApp:", error); 
      return NextResponse.json({ error: 'Error interno' }, { status: 500 });
    }
}