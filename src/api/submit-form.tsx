// 'use serve';
// import { google } from 'googleapis';
// import { NextApiRequest, NextApiResponse } from 'next';
// import path from 'path';
// import fs from 'fs';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   if (req.method === 'POST') {
//     const { nome, telefone, segmento, email, empresa, necessidade } = req.body;

//     Autenticação com Google Sheets API
//     const auth = new google.auth.GoogleAuth({
//       keyFile: path.join(process.cwd(), 'credentials.json'),
//       scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });

//     const client = await auth.getClient();
//     const sheets = google.sheets({ version: 'v4', auth: client });

//     const spreadsheetId = 'YOUR_SPREADSHEET_ID';
//     const range = 'Sheet1!A:F'; // Ajuste conforme necessário

//     try {
//       await sheets.spreadsheets.values.append({
//         spreadsheetId,
//         range,
//         valueInputOption: 'RAW',
//         resource: {
//           values: [[nome, telefone, segmento, email, empresa, necessidade]],
//         },
//       });
//       res.status(200).json({ message: 'Dados enviados com sucesso!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erro ao enviar dados.' });
//     }
//   } else {
//     res.status(405).json({ message: 'Método não permitido.' });
//   }
// }
