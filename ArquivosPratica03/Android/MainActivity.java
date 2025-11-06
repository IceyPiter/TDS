package com.example.atividadepratica03_tds;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    EditText valor1, valor2;
    TextView resultado;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Sempre primeiro define o layout da tela
        setContentView(R.layout.activity_main);

        // Depois encontra as views
        valor1 = findViewById(R.id.entrada1);
        valor2 = findViewById(R.id.entrada2);
        resultado = findViewById(R.id.resultado);

        // Mantém o ajuste de bordas (EdgeToEdge)
        EdgeToEdge.enable(this);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });
    }


    public void soma(View view) {
        double v1 = pegarValor1();
        double v2 = pegarValor2();
        double result = v1 + v2;

        String textoFormatado = String.format("Resultado da soma =  %.2f", result);
        resultado.setText(textoFormatado);
    }

    public void subtracao(View view) {
        double v1 = pegarValor1();
        double v2 = pegarValor2();
        double result = v1 - v2;

        String textoFormatado = String.format("Resultado da subtração =  %.2f", result);
        resultado.setText(textoFormatado);
    }

    public void multiplicacao(View view) {
        double v1 = pegarValor1();
        double v2 = pegarValor2();
        double result = v1 * v2;

        String textoFormatado = String.format("Resultado da multiplicação =  %.2f", result);
        resultado.setText(textoFormatado);
    }

    public void divisao(View view) {
        double v1 = pegarValor1();
        double v2 = pegarValor2();
        double result = v1 / v2;

        String textoFormatado = String.format("Resultado da divisão =  %.2f", result);
        resultado.setText(textoFormatado);
    }

    private double pegarValor1() {
        String texto = valor1.getText().toString().trim();
        if (texto.isEmpty()) return 0;
        return Double.parseDouble(texto);
    }

    private double pegarValor2() {
        String texto = valor2.getText().toString().trim();
        if (texto.isEmpty()) return 0;
        return Double.parseDouble(texto);
    }
}
