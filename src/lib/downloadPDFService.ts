
/**
 * Serviço para download do PDF do currículo
 */

export const downloadPDF = async (): Promise<boolean> => {
    try {
        // Caminho correto para o arquivo PDF
        const pdfPath = '/documents/Currículo Julio Cesar.pdf';

        // Criar um link temporário para download
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Currículo Julio Cesar.pdf';

        // Adicionar o link ao DOM temporariamente
        document.body.appendChild(link);

        // Simular clique para iniciar o download
        link.click();

        // Remover o link do DOM
        document.body.removeChild(link);

        console.log('Download do currículo iniciado com sucesso');
        return true;
    } catch (error) {
        console.error('Erro ao baixar currículo:', error);
        return false;
    }
};

/**
 * Função alternativa usando fetch para verificar se o arquivo existe
 */
export const downloadPDFWithFetch = async (): Promise<boolean> => {
    try {
        const pdfPath = '/documents/Currículo Julio Cesar.pdf';

        // Verificar se o arquivo existe
        const response = await fetch(pdfPath);

        if (!response.ok) {
            throw new Error(`Arquivo não encontrado: ${response.status}`);
        }

        // Obter o blob do arquivo
        const blob = await response.blob();

        // Criar URL temporária para o blob
        const url = window.URL.createObjectURL(blob);

        // Criar link para download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Currículo Julio Cesar.pdf';

        // Adicionar ao DOM e clicar
        document.body.appendChild(link);
        link.click();

        // Limpeza
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log('Download do currículo concluído com sucesso');
        return true;
    } catch (error) {
        console.error('Erro ao baixar currículo:', error);
        return false;
    }
};

/**
 * Função para verificar se o PDF existe antes de tentar baixar
 */
export const checkPDFExists = async (): Promise<boolean> => {
    try {
        const pdfPath = '/documents/Currículo Julio Cesar.pdf';
        const response = await fetch(pdfPath, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        console.error('Erro ao verificar PDF:', error);
        return false;
    }
};