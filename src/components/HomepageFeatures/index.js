import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


// var base = 'my-website';
// const fullLink = useBaseUrl(link);

const FeatureList = [
  {
    title:<a href='/my-website/docs/faq/General'><font color='black'>Frequently Asked Questions</font></a>,
   
    Svg: require('@site/static/img/book.svg').default,
    
    description: (
      <>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/General">    1. General </a>
        </div>

        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/Installation">    2. Installation</a>
        </div>


        <hr style={{ margin: '0.25rem 0' }}/>
        
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/category/basic-knowledge">    3. Basic Knowledge </a>
        </div>


        <hr style={{ margin: '0.25rem 0' }}/>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/category/simulation-setup" >    4. Simulation Setup </a>
        </div>
        

        <hr style={{ margin: '0.25rem 0' }}/>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/ObtainTechnicalSupport" >    5. Contact Us </a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
       
      </>
    ),
    
    
  },
  {
    // title: 'Tutorials',
    title:<a href='/my-website/docs/tutorial/1Material'><font color='black'>Tutorials</font></a>,

    Svg: require('@site/static/img/hat.svg').default,
    description: (
      <>
              {/* <hr /> */}

        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/tutorial/4Simulation/1FDE">1.What is FDE?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/4Simulation/2FDTD">2.What is FDTD?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/4Simulation/3EME">3.What is EME?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/1Material">4.How to set material?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/category/simulation">5.How to  set the simulation?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

       
        
      </>
    ),
  },
  
  {
    // title: 'Example Library',
    title:<a href='/my-website/docs/category/pic'><font color='black'>Example Library</font></a>,

    to:'/docs/examples/Grating/',
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
       {/* <hr /> */}
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/category/pic">1.PIC</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/category/grating">2.Grating</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/examples/Active_Device/MOD/">3.PD</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        {/* <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/t1">5.PD(by SDK)</a>
        </div> */}
        {/* <hr style={{ margin: '0.25rem 0' }}/> */}

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/examples/Active_Device/MOD/">4.MOD</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        {/* <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/material">7.MOD(by SDK)</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/> */}

       
      </>
    ),
  },


  {
    // title: 'How do I',
    title:<a href='/my-website/docs/category/max-optics-sdk'><font color='black'>Max-Optics SDK</font></a>,

    Svg: require('@site/static/img/tool.svg').default,
    description: (
      <>
         {/* <hr /> */}
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/test/v2_core/1Material">1.How can I add an anisotropic material with SDK?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/test/v2_core/5Mornitor">2.How can I add a monitor with SDK?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/test/v2_core/6Simulation">3.How can I create a simulation with SDK?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/test/v2_core/2Structure">4.How can I adjust the structure with SDK?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
        
       
        
      
      </>
    ),
  },

];


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')} style={{ paddingLeft: '50px', paddingRight: '50px'}}>
      <div className='title'>
        <div className="text--left">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="feature-content">
          <h3 style={{fontSize:25,marginBottom: '1rem'}}>{title}</h3>
        </div>
      </div>
      
      <div className="text--left padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}




export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


