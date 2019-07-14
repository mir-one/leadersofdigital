package com;

import com.repository.Entitys;
import com.repository.Persons;

import java.sql.*;

public class StockExchange {

    // Блок объявления констант
    public static final String DB_URL = "jdbc:h2:/c:/Хакатон/db/stockExchange";
    public static final String DB_Driver = "org.h2.Driver";

    // Получить новое соединение с БД
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL);
    }

    // Таблицы СУБД
    Persons persons;
    Entitys entitys;

    // Инициализация
    public StockExchange() throws SQLException, ClassNotFoundException {
        Class.forName(DB_Driver);
        // Инициализируем таблицы
        persons = new Persons();
        entitys = new Entitys();
   }

    // Создание всех таблиц и ключей между ними
    public void createTablesAndForeignKeys() throws SQLException {
        persons.createTable();
        entitys.createTable();
        entitys.createForeignKeys();
    }

    public static void main(String[] args) {
        try {
            StockExchange stockExchange = new StockExchange();
            stockExchange.createTablesAndForeignKeys();
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Ошибка SQL !");
        } catch (ClassNotFoundException e) {
            System.out.println("JDBC драйвер для СУБД не найден!");
        }
    }
}

