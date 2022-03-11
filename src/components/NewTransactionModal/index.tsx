import React, { useState } from 'react'
import Modal from 'react-modal';
import { Container, Content, RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
Modal.setAppElement('#root')

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
    const [type, setType] = useState('deposit')

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="botão de fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>

                <input type="text"
                    placeholder="titulo"
                />
                <input type="number"
                    placeholder="valor"
                />

                <Content>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <span>Saída</span>
                        <img src={outcomeImg} alt="Saída" />
                    </RadioBox>
                </Content>

                <input type="text"
                    placeholder="category"
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>

    )
}
