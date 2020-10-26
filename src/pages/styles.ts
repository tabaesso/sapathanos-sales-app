import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // VIEW PRINCIPAL
    main: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 25,
        paddingBottom: 0,
    },

    // TÍTULO DA PÁGINA
    titlePage: {
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
    shoePrice: {
        backgroundColor: 'transparent',
        color: '#9B51E0',
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 18
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
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flexWrap: 'wrap'
    },

    cardVerticalContent: {
        margin: 5,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: '47%',

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
        borderRadius: 10,
        height: 110,
        width: 110,
        marginRight: 10,
        justifyContent: 'center', 
        alignItems: 'center'
    },  

    cardVerticalInfo: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    // CARD HORIZONTAL
    cardHorizontalContainer: {
        width: '100%'
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
    textIconButton: {
        backgroundColor: '#9B51E0',
        borderRadius: 10,
        height: 56,
        width: '100%',
        marginTop: 30,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

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

    //INPUT
    titleInput: {
        marginTop: 10,
        backgroundColor: 'transparent',
        color: '#4F4F4F',
        fontFamily: 'Quicksand_600SemiBold',
        fontSize: 18
    },

    textInput: {
        marginTop: 10,
        height: 50,
        width: '100%',
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        paddingHorizontal: 10, 
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
        color: '#828282',
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
    },

    // IMAGEM DO CALÇADO
    imageContainer: {
        height: 200,
    },

    image: {
        width: Dimensions.get('window').width,
        height: 200,
        resizeMode: 'cover',
      },

    // DETALHES DO CALÇADO
    shoeDetails: {
        padding: 24
    },

    shoeDetailName: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 36,
    },

    shoeDetailDescription:{
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
    },

    shoeDetailPrice: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 36,
        color: '#9B51E0',
    },

    // BOTÃO ADICIONAR AO CARRINHO
    cartButton: {
        backgroundColor: '#eb5757',
        borderRadius: 10,
        height: 50,
        width: '80%',
        marginTop: 30,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    cartButtonText: {
        color: '#f2f2f2',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
    },

    // INFORMAÇÕES COMPLEMENTARES
    additionalInfo: {
        width: '80%',
        height: 186,
        borderRadius: 10,
        backgroundColor: '#F2F2F2',

        justifyContent: 'center',
        alignItems: 'center',
    },

    horizontalInfo: {
        flexDirection: 'row',
    },

    additionalInfoHeader: {
        color: '#333333',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
    },

    additionalInfoTitle: {
        color: '#4f4f4f',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 18,
    },

    additionalInfoText: {
        color: '#828282',
        fontFamily: 'Quicksand_500Medium',
        fontSize: 14,
    },

    // TAMANHOS DISPONÍVEIS
    sizeContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#EB5757',

        justifyContent: 'center',
        alignItems: 'center',
    },
    
    sizeText: {
        color: '#FFF',
        fontFamily: 'Quicksand_700Bold',
        fontSize: 24,
    },

});

export default styles;