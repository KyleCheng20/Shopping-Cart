export default function DepartmentSidebar({ categories, selectedCategory, onSelectCategory, isOpen, onClose }) {
    return (
        <aside className={`department-sidebar ${isOpen ? "open" : ""}`}>
            <div className="department-container">
                <h2>Departments</h2>
    
                <div className="departments-btn-container">
                    <button
                        className={selectedCategory === "all" ? "selected" : ""}
                        onClick={() => onSelectCategory("all")}
                    >
                        All Products
                    </button>

                    {categories.map(category => (
                        <button 
                            key={category}
                            className={selectedCategory === category ? "selected" : ""}
                            onClick={() => onSelectCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    )
}