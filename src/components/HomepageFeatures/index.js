import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


// var base = 'my-website';
// const fullLink = useBaseUrl(link);

const FeatureList = [
  {
    title:<a href='/my-website/docs/faq/'><font color='black'>Frequently Asked Questions</font></a>,
   
    Svg: require('@site/static/img/book.svg').default,
    
    description: (
      <>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/">    1.What is Max-Optics? </a>
        </div>

        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/faq1">    2.How to install Max-Optics?</a>
        </div>


        <hr style={{ margin: '0.25rem 0' }}/>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/faq2">    3.How to obtain a license? </a>
        </div>


        <hr style={{ margin: '0.25rem 0' }}/>
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/faq/faq3">    4.How to obtain technical service support? </a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

       
      </>
    ),
    
    
  },
  {
    // title: 'Tutorials',
    title:<a href='/my-website/docs/tutorial/material'><font color='black'>Tutorials</font></a>,

    Svg: require('@site/static/img/hat.svg').default,
    description: (
      <>
              {/* <hr /> */}

        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/tutorial/simulation/fde">1.What is FDE?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/simulation/fdtd">2.What is FDTD?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/simulation/eme">3.What is EME?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/material">4.How to set material?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/category/simulation">5.How to simulation?</a>
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
        <a href="/my-website/docs/examples/Grating/">2.Grating</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/examples/Metamaterial/">3.Metamaterial</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/examples/PD/">4.PD</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        {/* <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/t1">5.PD(by SDK)</a>
        </div> */}
        {/* <hr style={{ margin: '0.25rem 0' }}/> */}

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/examples/MOD/">5.MOD</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        {/* <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/tutorial/material">7.MOD(by SDK)</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/> */}


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/examples/Lasers/">6.Lasers</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/examples/Optical_scattering_and_far-field_radiation/">7.Optical scattering and far-field radiation</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
       
      </>
    ),
  },


  {
    // title: 'How do I',
    title:<a href='/my-website/docs/category/maxoptics_sdkall'><font color='black'>Max-Optics SDK</font></a>,

    Svg: require('@site/static/img/tool.svg').default,
    description: (
      <>
         {/* <hr /> */}
        <div style={{ textAlign: 'left' }}>
          <a href="/my-website/docs/test/core/material/interface#1-add_anisotropy">1.How can I add an anisotropic material with SDK?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>
  
        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/test/core/monitors/interface#1-add-a-monitor">2.How can I add a monitor with SDK?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>


        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/test/core/simulation/simu_res#1-add">3.How can I create a simulation with SDK?</a>
        </div>
        <hr style={{ margin: '0.25rem 0' }}/>

        <div style={{ textAlign: 'left' }}>
        <a href="/my-website/docs/test/core/structure/interface">4.How can I adjust the structure with SDK?</a>
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


