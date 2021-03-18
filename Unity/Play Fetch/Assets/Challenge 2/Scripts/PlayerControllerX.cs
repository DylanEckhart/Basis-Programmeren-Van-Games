using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControllerX : MonoBehaviour
{
    public GameObject dogPrefab;
    
    public float spawnInterval = 0.0f;

    // Update is called once per frame
    void Update()
    {

        spawnInterval++;
        
        // On spacebar press, send dog
        if (Input.GetKeyDown(KeyCode.Space) && spawnInterval > 200f)
        {
            Instantiate(dogPrefab, transform.position, dogPrefab.transform.rotation);
            spawnInterval = 0.0f;
        }
    }
}
