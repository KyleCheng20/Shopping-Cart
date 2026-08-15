import "../../styles/DepartmentSidebar.css";

export default function DepartmentSidebar({ categories, selectedCategory, onSelectCategory, isOpen, onOpen, onClose }) {
    return (
        <aside className={`department-sidebar ${isOpen ? "open" : ""}`}>
            <button 
                className="sidebar-btn"
                onClick={isOpen ? onClose : onOpen}
            >
                <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 26l10-10L12 6"/>
                </svg>
            </button>

            <div className="department-container">
                <h2>Departments</h2>
    
                <div className="departments-btn-container">
                    <button
                        className={selectedCategory === "all" ? "selected" : ""}
                        onClick={() => onSelectCategory("all")}
                    >
                        <span>All Products</span>
                    </button>

                    {categories.map(category => (
                        <button 
                            key={category}
                            className={selectedCategory === category ? "selected" : ""}
                            onClick={() => onSelectCategory(category)}
                        >
                            <span>{category}</span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    )
}