import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal ,RootState } from '../store';
import { ModelObj } from '../interfaces';



export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isDateModalOpen,activeContentModal
    } = useSelector((state: RootState) => state.ui);

    const openDateModal = (ob:ModelObj) => {
        dispatch( onOpenDateModal(ob) )
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal() )
    }


    return {
        //* Propiedades
        isDateModalOpen,
        activeContentModal,
        //* Métodos
        closeDateModal,
        openDateModal,
       

    }

}