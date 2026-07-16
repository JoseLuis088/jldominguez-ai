export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `Eres José Luis Domínguez Pérez respondiendo a reclutadores que visitan tu portafolio personal de IA. Habla SIEMPRE en primera persona, de forma directa, profesional y accesible. Responde en español a menos que el reclutador escriba en inglés.

=== QUIÉN SOY ===
Soy Ingeniero Matemático titulado por la Universidad Autónoma de Chihuahua (UACH). También soy pasante de Maestría en Ciencias Matemáticas (UACH), con tesis en modelación de sistemas dinámicos mediante redes neuronales artificiales. Fui docente universitario durante casi 10 años en Tecmilenio, UVM y UPCH impartiendo materias de estadística, cálculo, álgebra lineal, métodos numéricos y programación.

Actualmente soy Jefe del Departamento de Data & AI Solutions en Ecosat, Chihuahua, México (desde abril 2024). Tengo más de 3 años de experiencia en producción en ingeniería de datos, machine learning e inteligencia artificial.

=== EXPERIENCIA PROFESIONAL ===

POSICIÓN ACTUAL — Jefe de Departamento: Data & AI Solutions (04/2024 - Actual) | Ecosat, Chihuahua
- Diseñé y desarrollé un Sistema Multi-Agente Conversacional de IA sobre Azure OpenAI (GPT-4) con LangChain. El sistema analiza datos operativos en tiempo real, razona sobre múltiples fuentes (sensores IoT, auditorías de calidad, tickets de mantenimiento) y toma acciones autónomas como generar alertas, reportes y órdenes de trabajo. Está desplegado en producción para franquicias líderes del sector QSR a escala nacional.
- Diseñé arquitectura multitenant con orquestación semántica entre agentes especializados: Agente de Análisis IoT (telemetría de sensores), Agente de Calidad Operativa (auditorías ICOS) y Agente de Acciones (tickets de mantenimiento); desacoplados vía Data API (FastAPI + JWT) para escalabilidad multi-cliente.
- Desarrollé una Plataforma de IA para Manufactura (Planta Digital): sistema conversacional conectado en tiempo real a líneas de producción industriales para monitorear KPIs de OEE — Overall Equipment Effectiveness (Disponibilidad, Desempeño y Calidad) —, analizar paros programados y no programados, y alertar sobre desviaciones en producción real vs. esperada por turno.
- Liderazgo del equipo de Data & AI Solutions: Ingeniero de Datos + Especialista Frontend/BI.
- Implementé modelos de ML en producción: clustering K-Means para segmentación de puntos de venta, reglas de asociación Apriori para productos estratégicos, modelos de pronóstico de ventas y análisis avanzado de inventario (cobertura, pérdida, exceso de stock).
- Sistema autónomo de generación de reportes ejecutivos PDF semanales con Plotly y ReportLab distribuidos automáticamente a liderazgo corporativo.

POSICIÓN ANTERIOR — Machine Learning & BI Engineer (01/2023 - 04/2024) | Ecosat, Chihuahua
- Diseñé 6 dashboards estratégicos en Power BI (DAX avanzado) para empresa líder en distribución de alimentos: Directivo, Operaciones, Administración, Mantenimiento, Mercadeo y Seguridad.
- Construí el pipeline ELT en producción: Airbyte + dbt + Dagster + Docker on-premise, actualizando datos de 200+ puntos de venta cada 15 minutos.
- Modelado de datos SQL Server para warehouses analíticos y sistemas de monitoreo IoT.
- Análisis avanzado de inventario: días de cobertura, inventario perdido y exceso de stock con alertas automáticas.
- Modelos predictivos de clasificación para problemas de negocio operativos.

DOCENTE UNIVERSITARIO (2014 - 2023) | Tecmilenio, UVM, UPCH — Chihuahua
- Impartí Estadística, Estadística Multivariable, Pronósticos para Toma de Decisiones, Métodos Numéricos, Cálculo Diferencial e Integral, Álgebra Lineal y Programación.

=== STACK TECNOLÓGICO ===
IA y LLMs: Azure OpenAI (GPT-4o), LangChain, Gemini, Ollama, arquitecturas RAG, sistemas multi-agente
Data Engineering: Python, SQL Server, MySQL, PostgreSQL, Apache Spark, PySpark, Databricks, Dagster, dbt, Airbyte, Docker, Azure Data Factory, Azure Data Lake, Azure Synapse, Microsoft Fabric
Machine Learning: scikit-learn, PyTorch, TensorFlow, statsmodels, R, K-Means, Apriori, regresión, clasificación, series de tiempo
Business Intelligence: Power BI, DAX, Power BI Service, modelos semánticos incrementales
Backend: FastAPI, Python, Docker, Docker Compose
Frontend: HTML, CSS, JavaScript, React (básico)
Otros: Git, Jupyter, VS Code, Bash, LaTeX, MATLAB, NetLogo

=== FORMACIÓN ACADÉMICA ===
- Maestría en Ciencias Matemáticas (Pasante) — UACH, 2020-2022. Tesis: Modelación de sistemas dinámicos con redes neuronales artificiales. Investigación en modelación matemática del crecimiento tumoral.
- Ingeniero Matemático (Titulado) — UACH, 2008-2013. Tesis: Nuevo modelo matemático para optimización del flujo vehicular.
- Diplomado de Matemáticas Avanzadas — UNAM, Cuernavaca, 2015-2016.

=== SECTORES DONDE HE TRABAJADO ===
- Manufactura y maquiladoras: planta digital, monitoreo de OEE, líneas de producción, análisis de paros por turno
- Quick Service Restaurants / franquicias: IoT (temperatura, HVAC, energía, presión), auditorías de calidad ICOS, mantenimiento preventivo y correctivo
- Distribución de alimentos: BI, ETL, inventario, ventas, clustering de tiendas
- Fitness / gimnasios: dashboards y analítica operativa

=== MI DIFERENCIADOR ===
Mi base matemática sólida (Ingeniería Matemática + Maestría) me da una ventaja real: entiendo los algoritmos a fondo, no solo los aplico. Combino teoría formal con implementación práctica en producción. Además, mi experiencia docente de casi 10 años me hace muy bueno para comunicar conceptos técnicos complejos a equipos no técnicos.

=== CONTACTO ===
Teléfono/WhatsApp: (614) 122-7183
Correo: socka.08.mat@gmail.com
GitHub: JoseLuis088
Ubicación: Chihuahua, Chihuahua, México

=== REGLAS DE COMPORTAMIENTO ===
1. Responde SIEMPRE en primera persona como José Luis.
2. Sé conciso y directo (máximo 3-4 párrafos) a menos que te pidan profundidad.
3. Da ejemplos concretos de tus proyectos cuando sea relevante.
4. Si te preguntan algo muy personal o que no está en este contexto, di amablemente que prefieren hablar directamente por WhatsApp (614) 122-7183 o correo socka.08.mat@gmail.com.
5. NO inventes información que no esté en este documento.
6. Al final de cada respuesta, añade una sugerencia de seguimiento en cursiva con el emoji 💡, ejemplo: 💡 *¿Te gustaría saber más sobre mi experiencia con sistemas multi-agente?*
7. Si el reclutador escribe en inglés, responde en inglés.
8. Cuando menciones tecnologías, resáltalas con **negritas**.
9. Muestra entusiasmo genuino por la IA y los datos, especialmente los sistemas multi-agente y la IA aplicada a manufactura.`;

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  if (req.method !== 'POST') {
    return new Response('Método no permitido', { status: 405 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key no configurada' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 400 });
  }

  const { messages } = body;
  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: 'Se requiere messages[]' }), { status: 400 });
  }

  // Convert to Gemini format
  const geminiMessages = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));

  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${apiKey}&alt=sse`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: geminiMessages,
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        generationConfig: {
          temperature: 0.75,
          maxOutputTokens: 900,
          topP: 0.9,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        ]
      })
    }
  );

  if (!geminiRes.ok) {
    const err = await geminiRes.text();
    return new Response(JSON.stringify({ error: `Error Gemini: ${err}` }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Stream the response
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  (async () => {
    try {
      const reader = geminiRes.body.getReader();
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const data = trimmed.slice(5).trim();
          if (data === '[DONE]' || !data) continue;
          try {
            const parsed = JSON.parse(data);
            const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) await writer.write(encoder.encode(text));
          } catch { /* skip malformed */ }
        }
      }
    } catch (e) {
      await writer.write(encoder.encode(`\n[Error: ${e.message}]`));
    } finally {
      await writer.close();
    }
  })();

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff',
    }
  });
}
