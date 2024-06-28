'use server';

export async function postReclamacaoAction(formData: FormData) {
  try {
    const response = await fetch(
      'https://apikomode.altuori.com/wp-json/api/reclamacao',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer ' +
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaWtvbW9kZS5hbHR1b3JpLmNvbSIsImlhdCI6MTcxNTY0NDgwMCwibmJmIjoxNzE1NjQ0ODAwLCJleHAiOjI1Nzk2NDQ4MDAsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.tQ-Uuz58JbI2ksAdPJz-6OaBh6TUAE31jsbg84oXshQ',
        },
        body: formData,
      },
    );
    // console.log(formData);
  } catch (error) {
    console.error('Erro durante o envio da Reclamação:', error);
    throw error;
  }
}
