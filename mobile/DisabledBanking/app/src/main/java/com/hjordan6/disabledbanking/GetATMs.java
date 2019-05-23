package com.hjordan6.disabledbanking;

import android.app.Activity;
import android.content.Intent;
import android.os.AsyncTask;

import com.google.gson.Gson;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class GetATMs extends AsyncTask<Double, Integer, String> {
    private BlindSelection act = null;
    private DisabilitySelection act2 = null;

    @Override
    protected String doInBackground(Double...doubles) {
        // Make call to nessie and get ATMs array
        String json = "";
        try {
            URL url = new URL("http://api.reimaginebanking.com/atms?lat=" + doubles[0]
                    + "&lng=" + doubles[1] + "&rad=10&key=8788e47c136aa2f8398234c30573eba0");
            HttpURLConnection http = (HttpURLConnection)url.openConnection();
            http.connect();
            json = readString(http.getInputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return json;
    }

    protected void onPostExecute(String json) {
        if (act != null) {
            act.swap(json);
        } else {
            act2.swap(json);
        }
    }

    private String readString(InputStream is) throws IOException {
        StringBuilder sb = new StringBuilder();
        InputStreamReader sr = new InputStreamReader(is);
        char[] buf = new char[1024];
        int len;
        while ((len = sr.read(buf)) > 0) {
            sb.append(buf, 0, len);
        }
        return sb.toString();
    }

    public void setActivity(Activity act) {
        if(act.getClass() == BlindSelection.class) {
            this.act = (BlindSelection)act;
        } else {
            this.act2 = (DisabilitySelection)act;
        }
    }
}
