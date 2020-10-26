import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // VIEW PRINCIPAL
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 0,
    backgroundColor: '#FFF'
  },

  mainForScroll: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  // TÍTULO DA PÁGINA
  titlePage: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#333333',
    fontFamily: 'Quicksand_500Medium',
    fontSize: 24,
    marginBottom: 5
  },

  // QUANTIDADE ENCONTRADA
  lenghtInfo: {
      backgroundColor: 'transparent',
      color: '#333333',
      fontFamily: 'Quicksand_400Regular',
      fontSize: 12,
      marginBottom: 5
  },

  // FORMATAÇÃO CONTEÚDO DO CARD
  // PREÇO
  infoShoeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    direction: 'inherit',
    flexWrap: 'wrap',
  },

  infoShoeLeft: {
    backgroundColor: 'transparent',
    color: '#333',
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 18,
    flexWrap: 'wrap',
  },

  infoShoeRight: {
    backgroundColor: 'transparent',
    color: '#9B51E0',
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 18,
    flexWrap: 'wrap',
  },

  shoeDescription: {
    backgroundColor: 'transparent',
    color: '#4F4F4F',
    fontFamily: 'Quicksand_400Regular',
    fontSize: 16
  },

  shoeName: {
      backgroundColor: 'transparent',
      color: '#333333',
      fontFamily: 'Quicksand_700Bold',
      fontSize: 20
  },

  // CARD VERTICAL
  cardVerticalContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      maxWidth: 540
  },

  cardVerticalContent: {
      margin: 5,
      paddingBottom: 10,
      backgroundColor: '#F2F2F2',
      borderRadius: 10,

      width: 160,

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
  },

  cardVerticalImage: {
    backgroundColor: '#CCC',
    borderRadius: 10,
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardVerticalInfo: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  // CARD HORIZONTAL
  cardHorizontalContainer: {
      width: '100%',
  },

  cardHorizontallContent: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
},

  cardVHorizontallInfo: {
    marginLeft: 5,
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  // BOTÃO COM ICONE
  iconButton: {
      marginTop: 10,
      backgroundColor: '#9B51E0',
      padding: 10,
      borderRadius: 10,

      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },

  // BOTÃO COM ICONE E TEXTO
  textIconButtonContainer: {
    width: '100%',
  },

  textIconButton: {
      backgroundColor: '#9B51E0',
      borderRadius: 10,
      height: 56,
      marginTop: 20,

      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },

  titleTextIconButton: {
      backgroundColor: 'transparent',
      color: '#fff',
      fontFamily: 'Quicksand_400Regular'
  },

  // BOTAO COM BORDA
  textIconButtonTwo: {
    backgroundColor: '#FFF',
    borderLeftWidth: 5,
    borderRadius: 10,
    height: 40,
    marginTop: 10,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },

  titleTextIconButtonTwo: {
    backgroundColor: 'transparent',
    color: '#333333',
    fontFamily: 'Quicksand_400Regular'
  },

  //INPUT
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },

  titleInput: {
      backgroundColor: 'transparent',
      color: '#4F4F4F',
      fontFamily: 'Quicksand_600SemiBold',
      fontSize: 18,
  },

  textInput: {
      marginTop: 10,
      height: 50,
      width: '100%',
      paddingHorizontal: 10,
      backgroundColor: '#E0E0E0',
      borderRadius: 10,
      fontFamily: 'Quicksand_700Bold',
      fontSize: 18,
      color: '#828282',
  },

  selectInputContainer: {
    width: '100%',
    padding: 10,
  },

  selectInput: {
      marginTop: 20,
      backgroundColor: '#E0E0E0',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },

  pickerInput: {
      width: '100%',
      color: '#828282'
  },

  // MENSAGEM ABAIXO DO INPUT
  messageError: {
      color: '#EB5757',
      fontFamily: 'Quicksand_500Medium',
      fontSize: 12
  }
});

export default styles;
