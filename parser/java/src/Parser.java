import com.google.gson.*;
import com.model.Entity;
import com.model.Person;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Map;

public class Parser {
    public static int PRETTY_PRINT_INDENT_FACTOR = 4;
    public static String TEST_XML_STRING = null;

    public static void main(String[] args) throws IOException {

        //parseZAGS();

        //parseEGR();

//        ZonedDateTime zdt1 = ZonedDateTime.of(1970, 11, 10, 15, 0, 0, 0, ZoneId.of("Europe/Moscow"));
//        Person person = new Person(1,"Коровкин",zdt1.toLocalDate(),"Геримова","059963764514");
//        GsonBuilder builder = new GsonBuilder();
//        Gson gson = builder.create();
//        System.out.println(gson.toJson(person));


        File file = new File("C:\\Хакатон\\json\\EGRUL1.json");
        FileInputStream fin = new FileInputStream(file);
        byte[] jsonData = new byte[(int) file.length()];
        fin.read(jsonData);
        fin.close();
        String jsonString = new String(jsonData, StandardCharsets.UTF_8);


        Map<String, Object> javaRootMapObject = new Gson().fromJson(jsonString, Map.class);
        Map maproot =  (Map) ((Map)javaRootMapObject.get("EGRUL")).get("СвЮЛ");
        String nameEntity = (String)((Map) maproot.get("СвНаимЮЛ")).get("НаимЮЛПолн");
        String Inn = (String)((Map) maproot.get("СвУчетНО")).get("ИНН");
        Map namepersonmap = (Map)((Map) maproot.get("СведДолжнФЛ")).get("СвФЛ");
        String nameperson = namepersonmap.get("Фамилия").toString() + " " + namepersonmap.get("Имя").toString()+ " " + namepersonmap.get("Отчество").toString();
        String innperson = Float.toString(Float.parseFloat(namepersonmap.get("ИННФЛ").toString()));
        Entity entity = new Entity(1,nameEntity,"",Inn,new Person(1,nameperson,innperson),null,true);


//        JsonElement jelement = new JsonParser().parse(jsonString);
//        JsonObject jobject = jelement.getAsJsonObject();
//        jobject = jobject.getAsJsonObject("EGRUL");
//        jobject = jobject.getAsJsonObject("СведДолжнФЛ");
//        JsonArray jarray = jobject.getAsJsonArray("СвЮЛ");
//        jobject = jarray.get(0).getAsJsonObject();
//        String result = jobject.get("translatedText").getAsString();
//        System.out.println(result);

    }

    static void parseZAGS() throws IOException{
        for (int i = 1; i < 0; i++) {
            File file = new File("C:\\Хакатон\\zagsex" + Integer.toString(i) +".xml");
            FileInputStream fin = new FileInputStream(file);
            byte[] xmlData = new byte[(int) file.length()];
            fin.read(xmlData);
            fin.close();
            TEST_XML_STRING = new String(xmlData, "UTF-8");

            try {
                JSONObject xmlJSONObj = XML.toJSONObject(TEST_XML_STRING);

                String jsonPrettyPrintString = xmlJSONObj
                        .toString(PRETTY_PRINT_INDENT_FACTOR);
                FileWriter writer = new FileWriter("C:\\Хакатон\\zagsEx" + Integer.toString(i) +".json", false);
                writer.write(jsonPrettyPrintString);
                writer.flush();

            } catch (JSONException e) {
                System.out.println(e.toString());
            } catch (IOException ex){
                System.out.println(ex.getMessage());
            }
        }
    }

    static void parseEGR()throws IOException{
        File file = new File("C:\\Хакатон\\EGRUL1.xml");
        FileInputStream fin = new FileInputStream(file);
        byte[] xmlData = new byte[(int) file.length()];
        fin.read(xmlData);
        fin.close();
        TEST_XML_STRING = new String(xmlData, "UTF-8");

        try {
            JSONObject jsonObjectEGR = XML.toJSONObject(TEST_XML_STRING);
            String jsonPrettyPrintString = jsonObjectEGR
                    .toString(PRETTY_PRINT_INDENT_FACTOR);
            GsonBuilder builder = new GsonBuilder();
            Gson gson = builder.create();
            FileWriter writer = new FileWriter("C:\\Хакатон\\EGRUL1.json", false);
            writer.write(jsonPrettyPrintString);
            writer.flush();

        }catch (JSONException e){

        };
    }

}
