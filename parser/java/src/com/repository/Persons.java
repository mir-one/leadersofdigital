package com.repository;
import java.sql.SQLException;

public class Persons extends BaseTable implements TableOperations{
    public Persons() throws SQLException {
        super("persons");
    }

    @Override
    public void createTable() throws SQLException {
        super.executeSqlStatement("CREATE TABLE IF NOT EXISTS persons(" +
                "id BIGINT AUTO_INCREMENT PRIMARY KEY," +
                "name VARCHAR(255) NOT NULL," +
                "berDate datetime NULL_TO_DEFAULT,"+
                "OldSecName VARCHAR(255) NULL_TO_DEFAULT," +
                "Inn VARCHAR(255) NOT NULL)", "Создана таблица " + tableName);

    }

    @Override
    public void createForeignKeys() throws SQLException {

    }
}
