import { useEffect, useState } from "react";

const useHistorySearch = () => {
    const STORAGE_KEY = 'search_history';
    const MAX_ITEMS = 6;

    const getHistoryFromStorage = () => {
        try {
            const storedItem = localStorage.getItem(STORAGE_KEY);
            return storedItem ? JSON.parse(storedItem) : [];
        } catch(error) {
            return [];
        }
    }
    
    const [history, setHistory] = useState(getHistoryFromStorage);

    useEffect(() => {
        const handleStorageChange = () => {
            setHistory(getHistoryFromStorage())
        };
        window.addEventListener('history-updated', handleStorageChange);
        return () => {
            window.removeEventListener('history-updated', handleStorageChange) 
        }
    }, [])


    const addToHistory = (item) => {

        if (!item || !item.idAlbum) {
            console.error("No se puede guardar: Item inválido", item);
            return;
        }

        const currentHistory = getHistoryFromStorage();
        
        const filteredHistory = currentHistory.filter(existing => existing.idAlbum !== item.idAlbum);
        
        const newHistory = [item, ...filteredHistory].slice(0, MAX_ITEMS);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
        setHistory(newHistory);
        window.dispatchEvent(new Event('history-updated'))
    }

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem(STORAGE_KEY);
        window.dispatchEvent(new Event('history-updated'))
    }

    return { history, addToHistory, clearHistory }
}

export default useHistorySearch;