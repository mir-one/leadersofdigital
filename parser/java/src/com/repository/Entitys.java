package com.repository;

import java.sql.SQLException;

public class Entitys extends BaseTable implements TableOperations {
    public Entitys() throws SQLException {
        super("entitys");
    }

    @Override
    public void createTable() throws SQLException {
        super.executeSqlStatement("CREATE TABLE IF NOT EXISTS entitys(" +
                "id BIGINT AUTO_INCREMENT PRIMARY KEY," +
                "name VARCHAR(255) NOT NULL," +
                "address VARCHAR(255) NULL_TO_DEFAULT," +
                "inn VARCHAR(255) NOT NULL," +
                "person BIGINT NOT NULL,"+
                "rate DECIMAL(15,2) NOT NULL)", "Создана таблица " + tableName);
    }

    @Override
    public void createForeignKeys() throws SQLException {
        super.executeSqlStatement(" ALTER TABLE entitys ADD FOREIGN KEY (person) REFERENCES persons(id)",
                "Cоздан внешний ключ entitys.person -> persons.id");
    }
}
