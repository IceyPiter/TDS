import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  // override sobreescreve o metodo Widget da função (Stateless) pela função abaixo
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calcular área de um triângulo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const AreaTrianguloPage(),
    );
  }
}

class AreaTrianguloPage extends StatefulWidget {
  const AreaTrianguloPage();

  @override
  State<AreaTrianguloPage> createState() => AreaTrianguloPageState();
}

class AreaTrianguloPageState extends State<AreaTrianguloPage> {
  // final pelos valores so poderem serem atribuidos uma vez
  final TextEditingController baseController = TextEditingController();
  final TextEditingController alturaController = TextEditingController();

  double? area;

  void calcularArea() {
    final double? base = double.tryParse(baseController.text);
    final double? altura = double.tryParse(alturaController.text);

    // condição de erro
    if (base == null || altura == null) {
      return;
    }

    setState(() {
      area = (base * altura) / 2;
    });
  }

  // interface
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cálculo da área de um triângulo'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // espaço para inserir valor da bae
            TextField(
              controller: baseController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'Base',
              ),
            ),
            // espaço para inserir valor da altura
            TextField(
              controller: alturaController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(
                labelText: 'Altura',
              ),
            ),
            // configuração do botão que calcula a área
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: calcularArea,
              child: const Text('Calcular Área'),
            ),
            //exibição do resultado
            if (area != null) // if para evitar valores indesejados
              Text(
                'A área do triângulo é: ${area!.toStringAsFixed(2)}',
                style: const TextStyle(fontSize: 20),
                textAlign: TextAlign.center,
              ),
          ],
        ),
      ),
    );
  }
}
