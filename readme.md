# Memória descritiva

Depois de ter trabalhado a partir de uma obra de Piet Mondrian decidi selecionar uma outra artista para o exercício if/else. Inspirei-me nas bolinhas de Yayoi Kusama pois pensei que as bolinhas uma grelha regular de pontos sobre um fundo de cor saturada, que reage à posição do rato.
# Condições usadas:
* # Posição do rato (if/else com mouseX e mouseY):# 
 o ecrã é dividido em quatro zonas e a cor de fundo muda consoante a zona onde está o rato: vermelho, amarelo, azul ou preto.
* # Distância ao rato (if/else dentro do ciclo, com dist()):# 
 para cada bolinha, se estiver a menos de 120 px do rato fica grande (60 px), senão fica pequena (25 px).
* # Contraste (if sobre a cor de fundo): # 
 quando o fundo é amarelo, as bolinhas passam a pretas para continuarem visíveis, e nos restantes fundos ficam brancas.
* # Tecla (if com key)# 
 a tecla s guarda a imagem em PNG com saveCanvas().

As bolinhas perto do rato incham e as outras recuam, o que cria uma zona de foco que o segue. Ao mudar de zona, o ecrã inteiro muda de cor de uma vez, por isso a composição passa de calma a intensa sem transição, como nas salas de espelhos de Kusama.
 A repetição regular dos pontos mantém a ordem, e a interação é que lhe dá movimento.
# Uso de IA
Recorri ao Claude que me ajudou nas diferentes etapas do processo, principalmente debug e explorar variações.